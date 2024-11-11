function sender(x,y,z) {
  besked = {
    from:afsenderID, 
    val:x,
    otto:y,
    mouse:z
 
  };
   client.publish(topic, JSON.stringify(besked));
}
