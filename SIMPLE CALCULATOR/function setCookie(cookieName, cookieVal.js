function setCookie(cookieName, cookieValue, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    const cookie = `${cookieName}=${cookieValue};${expires};path=/`;
    document.cookie = cookie;
  }
  
  // Example: Set a cookie named "username" with the value "John" that expires in 7 days
  setCookie('username', 'John', 7);