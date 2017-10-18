function FindProxyForURL(url, host) {

  if (
    /google|gfw.press/i.test(uri)
  ) {
    return 'PROXY 127.0.0.1:3333;HTTP 127.0.0.1:3333;HTTPS 127.0.0.1:3333';
  } else {
    return 'DIRECT;PROXY 127.0.0.1:3333';
  }

}
