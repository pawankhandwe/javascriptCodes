function oauthSignIn() {
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); 
  form.setAttribute('action', oauth2Endpoint)
  var params = {'client_id': '110800019994-b5elo0ptiu0non6uomggordhavr1ed3q.apps.googleusercontent.com',
                'redirect_uri': 'http://127.0.0.1:5500/profile.html',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/userinfo.profile',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};  
  for (var p in params) {
    let input=document.createElement('span')
    input.innerHTML = `<input type='text' hidden name=${p} value=${params[p]}>`
    form.append(input)
  }
  document.body.appendChild(form);
  form.submit();
}