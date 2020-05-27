# Linux
## Concepts
- ssh

## ssh
```bash
eval $(ssh-agent -s) # Enable ssh-agent
ssh-add ~/.ssh/eduard.trandafir@mrm-mccann.com
```

```bash
pbcopy < ~/.ssh/id_rsa.pub
ssh-copy-id id@server		
ssh id@server		
ssh -i private_key user@host	Specify a private key to match	
ssh user@host -v	Verbose	
sudo apt-get install sshpass		
sshpass -p your_password ssh user@hostname
ssh-keygen -t rsa #		ssh
ssh-add ~/.ssh/id_rsa #	add ssh key to ssh agent. load the private key on this machine to the SSH keychain	ssh
$(ssh-agent -s)	# If no ssh client is currently running there you need to start one	ssh
ssh root@server_ip_address		
ssh -i ssh/eduard.trandafir@mrm-mccann.com mrm@etrandafir.dev.mrmf.de
```

## Basic commands
```bash
ls
ls -1		
ls -1 | wc -l
```

## Apache
```bash
sudo /etc/init.d/apache2 reload
sudo /etc/init.d/apache2 restart
sudo a2ensite [config_file]
systemctl stop apache2
apt-get remove --purge apache2
```

## Php
```bash
sudo apt-get install php7.1 php7.1-cli php7.1-common libapache2-mod-php7.1 php7.1-mysql php7.1-fpm php7.1-curl php7.1-gd php7.1-bz2 php7.1-mcrypt php7.1-json php7.1-tidy php7.1-mbstring php-redis php-memcached php7.1-dom php7.1-sqlite		
sudo apt-get install php7.2 php7.2-cli php7.2-common libapache2-mod-php7.2 php7.2-mysql php7.2-fpm php7.2-curl php7.2-gd php7.2-bz2 php7.2-mcrypt php7.2-json php7.2-tidy php7.2-mbstring php-redis php-memcached php7.2-dom php7.2-sqlite		
sudo apt-get install php7.1-zip		
sudo apt-get install php7.1-mbstring
```

## MySQL
```bash
systemctl status mysql.service
sudo service mysql status
sudo service mysql restart
```

## Nginx
```bash
sudo systemctl restart nginx.service #		nginx
apt-get install nginx
systemctl start nginx
systemctl enable nginx
systemctl status nginx
```

## Firewall
```bash
sudo ufw status
sudo ufw status numbered
```

## Others
```bash
telnet localhost 11211
flush_all
quit
ps aux
nslookup		
rm -rf app/cache/*		
ln -s source destination		
unlink SYMLINK
sudo systemctl restart mysql.service #		mysql
awk		
watch		
phpize		
make		
make install		
wget		
netcat		
ssh-fs		
telnet		
broadcast		
ncdu		
df		
du		
dmesg		
more		
nc		
id		
netstat -l
netstat --listen		
netstat -tulpn		
journalctl -xe		
fusermount -u /path/to/sshfs/share	Unmount the directory which is mounted by sshfs	
umount -l  /tmp/mymountpoint/		
uptime		
sh		
grep 'word' filename		
grep 'word' file1 file2 file3		
grep 'string1 string2'  filename		
cat otherfile | grep 'something'		
command | grep 'something'			
apt-get install php-fpm php-mysql		
apt-get update && apt-get upgrade		
sudo add-apt-repository ppa:ondrej/php		
apt-cache search php | grep EXTENSION_NAME	Search for an extension	
sudo apt-get update		
apt-get install mysql-server		
mysql_secure_installation		
sed		
sed -i 's/foo/bar/g' *		
sudo mkdir -p /path/to/directory	No error if existing, make parent directories as needed	linux
nproc		
lscpu		
ab -k -c 350 -n 20000 example.com/		
make		
make install		
gunzip		
adduser username		
usermod -aG sudo username		
su - username		
su		
passwd		
mysql_secure_installation		
dpkg -s mysql-server				
cp -rp /path/to/drupal_site /path/to/backup_dir	The option -rp means copy recursive and preserve permissions.	
tar czf drupalbackup.tgz /path/to/drupal_site/		tar, compress
tar xzpf drupalbackup.tgz		tar, decompress
bc		
head		
tail		
wc		
rsync
ufw limit ssh	
ls | more	Display the content page by page	
```
