function FindProxyForURL (url, host) {
  if (host.toLowerCase() === "horizon.mcgill.ca" || host.toLowerCase() === www.ratemyprofessors.com) {
    return "DIRECT";
  }
  // block any other connection
  return "PROXY 127.0.0.1:9876";
}