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
sudo ufw allow http
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
sudo ufw allow 25
```

## ssh
### Basic commands
```bash
ssh-keygen -t rsa -C "username@example.com" # Generate a ssh key
```
```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub root@1.2.3.4 # copy the key the remote servers
cat ~/.ssh/id_rsa.pub | ssh root@1.2.3.4 "mkdir ~/.ssh; cat >> ~/.ssh/authorized_keys" # OS X alternative
```
