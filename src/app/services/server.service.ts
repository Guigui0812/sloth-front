import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private serverArray: any[] = [];
  private serverLoadingStatus: any[] = [];

  constructor (private http: HttpClient) { 
  
    this.refreshServerArray();
  }

  getServerLoadingStatus(serverName: string) {
    const server = this.serverLoadingStatus.find((s) => s.name === serverName);
    return server ? server.loading : false;
  }

  refreshServerArray() {
    this.http.get('http://127.0.0.1:8000/sloth/instances').subscribe((servers: any) => {
      this.serverArray = servers;
      this.serverLoadingStatus = servers.map((server: any) => ({ name: server.name, loading: false }));
    });
  }

  getServers() {
    return this.serverArray;
  }

  deleteServers(serverName: string, serverType: string) {
    if (serverType === 'proxmox') {
      const server = this.serverLoadingStatus.find((s) => s.name === serverName);
      if (server) {
        server.loading = true;
        this.http.delete(`http://127.0.0.1:8000/sloth/instances/Proxmox/${serverName}`).subscribe({
          next: () => {
            server.loading = false;
            this.refreshServerArray();
          },
          error: () => {
            server.loading = false;
          }
        });
      }
    }
  }

  addServer(serverData: any) {

    let server = {
      type: "proxmox",
      name: serverData.serverName,
      node_name: "infra",
      username: serverData.username,
      password: serverData.password,
      datastore_id: "local-lvm",
      file_id: "local:iso/ubuntu-22.10-server-cloudimg-amd64.img",
      interface: "virtio0",
      iothread: "true",
      discard: "on",
      size: "10",
    };

    try {
      this.http.post('http://127.0.0.1:8000/sloth/instances/proxmox', server).subscribe(() => {
        this.refreshServerArray();
      });

      console.log('Server added successfully');
    } catch (error) {
      console.error('Error adding server');
    }
  }
}
