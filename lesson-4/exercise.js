function Foo(name) {
    this.firstName = name
  }
  
  function Bar(name) {
    const c = Foo(name)
    c(name)
  }
  
  const a = new Bar('tyler')
  
  console.log(a.firstName) // undefined.. but we want it to return 'tyler'