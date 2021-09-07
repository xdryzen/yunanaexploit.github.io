<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="com.google.gson.Gson,javax.servlet.http.Cookie,java.net.URL,java.net.URLDecoder,java.security.*,java.io.*,java.util.* "%>

<%!
static final String YOUR_APP_ID = "YOUR_FACEBOOK_APP_ID_HERE";
static final String YOUR_APP_SECRET = "YOUR_FACEBOOK_APP_SECRET_HERE";

class FacebookUser {
	String id;
	String name;
	String first_name;
	String last_name;
	String username;
}

static String toHex(byte[] bytes) {
	final StringBuilder sb = new StringBuilder();
	for (byte b:bytes) {
		sb.append( Integer.toHexString( ( b & 0xf0 ) >>> 4 ) );
		sb.append( Integer.toHexString( b & 0x0f ) );
	}
	return sb.toString();
}

static String buildChecksum(Map<String,String> map) throws NoSuchAlgorithmException, UnsupportedEncodingException {
	final StringBuilder sb = new StringBuilder();
	for (Map.Entry<String,String> entry:map.entrySet()) {
		sb.append(entry.getKey());
		sb.append("=");
		sb.append(entry.getValue());
	}
	sb.append(YOUR_APP_SECRET);
	MessageDigest md = MessageDigest.getInstance("MD5");
	byte[] thedigest = md.digest((sb.toString()).getBytes("UTF-8"));
	return toHex(thedigest);
}

static String getAccessToken(Cookie[] cookies) {
	for (Cookie cookie:cookies) {
		if (cookie.getName().equals("fbs_" + YOUR_APP_ID)) {
			String sig = null;
			String accessToken = null;
			final Map<String,String> cookieMap = new TreeMap<String,String>();
			final String[] tokens = cookie.getValue().split("\\&");
			for (String token:tokens) {
				final String[] keyvalue = token.split("=");
				if (keyvalue.length == 2) {
					String key = keyvalue[0];
					String value = keyvalue[1];
					if (key.equals("access_token")) {
						accessToken = value;
					} else if (key.equals("sig")) {
						sig = value;
					}
					if (!key.equals("sig") ) {
						cookieMap.put(key,URLDecoder.decode(value));
					}
				}
			}
			// verify MD5 hash of cookie parameters
			try {
				final String checksum = buildChecksum(cookieMap);
				return checksum.equalsIgnoreCase(sig) ? accessToken : null;
			} catch(Exception ex) {
				// unable to verify checksum
				return null;
			}
		}
	}
	return null;
}

static FacebookUser getUser(String accessToken) {
	if (accessToken != null) {
		InputStream is = null;
		try {
			URL url = new URL("https://graph.facebook.com/me?access_token=" + accessToken);
			is = url.openStream();
			return new Gson().fromJson(new InputStreamReader(is), FacebookUser.class);
		} catch(IOException ex) {
			// unable to get user
		} finally {
			if (is != null)
			try { is.close(); } catch(IOException ex) {}
		}
	}
	return null;
}
%>
<%
final String accessToken = getAccessToken(request.getCookies());
FacebookUser user = null;
if (accessToken != null) {
	user = getUser(accessToken);
}
%>
<html>
<head>

</head>
<body>
<% if (user != null) { %>
<h2>Welcome <%= user.name %>!</h2>
<input type="button" onclick="FB.logout()" value="Logout"></input>
<% } else { %>
<fb:login-button>Login with Facebook</fb:login-button>
<% } %>
<div id="fb-root"></div>
<script src="http://connect.facebook.net/en_US/all.js"></script>
<script>
  FB.init({appId: '<%= YOUR_APP_ID %>', status: true,
    cookie: true, xfbml: true});
  FB.Event.subscribe('auth.sessionChange', function(response) {
    if (response.session) {
      alert('Login successful');
    } else {
      alert('You have logged out');
    }
	window.location.reload();
  });

</script>
</body>
</html>
