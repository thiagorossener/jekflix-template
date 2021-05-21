(async () => {

    if ("serviceWorker" in navigator) {

        // we register our service worker                             						
        const registration = await navigator.serviceWorker.register('/offline.js');

        // when our service worker is updated
        registration.onupdatefound = () => {

            // when our service worker is updated
            registration.installing.onstatechange = function () {
                console.log(`Service worker... ${this.state}`);
            };
        };

    }

})()
.catch(e => console.log(`:) : ${e}`));



let deferredPrompt = null;

const triggerAskToInstall = async () => {

    console.log('Ask to install ! ');

    if (deferredPrompt === null) {
        return false;
    }

    // The user has had a positive interaction with our app and Chrome
    // has tried to prompt previously, so let's show the prompt.
    deferredPrompt.prompt().catch(console.log);

    // Follow what the user has done with the prompt.
    const choiceResult = await deferredPrompt.userChoice.catch(console.log);

    // We no longer need the prompt.  Clear it up.
    deferredPrompt = null;

    return choiceResult.outcome

};


window.addEventListener('beforeinstallprompt', function (e) {
  
    if(deferredPrompt) {
      return false;
    }

    console.log('[PWA] beforeinstallprompt Event fired and stashed');

    e.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    if (deferredPrompt) {
        readyToInstall();
    }

});



const readyToInstall = () => {

    const $pwaInstall = document.querySelector('#pwa-install');

    $pwaInstall.classList.remove('hidden');

    $pwaInstall.addEventListener('click', async function (e) {

        const userChoice = await triggerAskToInstall();

        if (userChoice === 'dismissed') {
            console.log('User cancelled home screen install');
        } else {
            console.log('User added to home screen');
        }

    });


};

performance.mark('form-loaded');


var version = "v2.0.2";
var swPath;
var urlObject = new URL(location);
var host;
if (urlObject.searchParams.get("swPath")) {
    swPath = urlObject.searchParams.get("swPath");
}
else {
    if (urlObject.searchParams.get("version")) {
        version = urlObject.searchParams.get("version");
    }
    if (urlObject.searchParams.get("swJSHost")) {
        host = "https://" + urlObject.searchParams.get("swJSHost");
    }




    else {
        host = "https://sdki.truepush.com/sdk/";
    }
    swPath = host + version + "/sw.js";
}
importScripts(swPath);





