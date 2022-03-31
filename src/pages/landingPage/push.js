const push =  require('web-push');

let vapidKeys= {
  publicKey: 'BAfU8GXv3Wm53JwxK1O6n6OIEUabm76khyx-LAo4L1EjaK4CLozIH5EDf6dppKUZ1T-8sh_MNpE3I1626Fs_umc',
  privateKey: 'usNWg-VvoogngdAcvCwP2FK2JJQBdmZZW4itjfSwYU0'
}

push.setVapidDetails('mailto:balomari@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

const subscription = {};
push.sendNotification(subscription, 'test message')