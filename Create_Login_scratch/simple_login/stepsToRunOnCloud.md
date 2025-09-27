### I ran the following codes
```
npm run build
```
## Then went to the dist folder
```
pm2 start "serve" --name login
```
- Save the PM2 process so it restarts on reboot:
```
pm2 save
pm2 startup
```