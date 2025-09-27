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

## 2. Look for old PM2 process files

PM2 keeps process files here:

```bash
ls ~/.pm2/dump.pm2
```
### If dump.pm2 exists, you can restore it:
```
pm2 resurrect
```
