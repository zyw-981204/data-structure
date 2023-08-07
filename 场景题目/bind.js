function myBind(context, ...args) {
  if (typeof this !== 'function') {
    throw ('error ')
  }

  const fun = this;
  return function () {
    return fun.apply(
      context
      , args)
  }
}
Function.bind = myBind





// function bind(context, ...args) {
//   if (typeof this !== 'function') {
//     throw('error')
//   }
//   const fun = this;
//   const ctx = context || globalThis;

//   return function() {
//     fun.apply(ctx, args)
//   }

// }