<script>
var version="v2.0.2";var swPath;var urlObject=new URL(location);var host;if(urlObject.searchParams.get("swPath")){swPath=urlObject.searchParams.get("swPath");}
else{if(urlObject.searchParams.get("version")){version=urlObject.searchParams.get("version");}
if(urlObject.searchParams.get("swJSHost")){host="https://"+urlObject.searchParams.get("swJSHost");}
else{host="https://sdki.truepush.com/sdk/";}
swPath=host+version+"/sw.js";}
importScripts(swPath);
</script>
