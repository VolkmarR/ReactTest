- Wenn man die Api zu oft abfragt, bekommt man ein 429 (to many requests)
- der Import von Box im Test.tsx war hilfreich... Hab eine weile gebraucht, um draufzukommen, dass material-ui/core latest die Version 4 ist. Eventuell Link im Todo anpassen
- Zwischendurch bekommt man in der Vorschau den folgenden Fehler

```
ModuleNotFoundError
Could not find module in path: '@material-ui/core/Table' relative to '/components/employeesTable.tsx'
```

Nach einigen refreshs behebt dieser sich von selbst.

- In der console wird die React Warnung

```
Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
```
