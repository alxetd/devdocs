# Devops

## ufw firewall
### Basic commands
```bash
sudo ufw status
sudo ufw status verbose
sudo ufw reload
sudo ufw disable
sudo ufw enable
```

```bash
sudo ufw status numbered
sudo ufw insert 1 deny from xx.xx.xx.xx to any
sudo ufw delete x
```

### Basic configuration
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw deny www
sudo ufw allow https
sudo ufw deny mysql
```
