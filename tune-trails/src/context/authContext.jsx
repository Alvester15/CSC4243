import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authorization, setAuthorization] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);
  const authB64 = btoa(`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`);

  // checking our localStorage if we have authorization, refresh_token, and user
  useEffect(() => {
    const authorizationCode = window.localStorage.getItem('authorization'); 
    const refresh_token = window.localStorage.getItem('refresh_token');
    const localUser = window.localStorage.getItem('user');

    if (authorizationCode) {
      setAuthorization(authorizationCode);
    }

    if (refresh_token) {
      setRefreshToken(refresh_token);
    }

    if (localUser) {
      setUser(localUser);
    }
  }, []);

  const getRefreshToken = async ({
    authorizationCode,
    redirect_uri,
    authB64,
  }) => {
    const params = {
      grant_type: "authorization_code",
      code: authorizationCode,
      redirect_uri: redirect_uri,
    };
  
    const config = {
      headers: {
        Authorization: `Basic ${authB64}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
  
    const {
      data: { refresh_token },
    } = await axios.post(
      "https://accounts.spotify.com/api/token",
      params,
      config
    );
  
    return refresh_token;
  }
  
  useEffect(() => {
    const start = async () => {
      const refresh_token = await getRefreshToken({
        authorizationCode: authorization,
        redirect_uri,
        authB64,
        token: "refresh",
      });

      window.localStorage.setItem("refresh_token", refresh_token);
      setRefreshToken(refresh_token);
    };

    authorization && !refreshToken && start();
  }, [authorization]);

  const getAccessToken = async ({ refreshToken, authB64 }) => {
    const params = {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    };
  
    const config = {
      headers: {
        Authorization: `Basic ${authB64}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
  
    const {
      data: { access_token },
    } = await axios.post(
      "https://accounts.spotify.com/api/token",
      params,
      config
    );
  
    return access_token;
  };

  useEffect(() => {
    const getUser = async () => {
      const access_token = await getAccessToken({
        refreshToken,
        authB64,
      });

      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get("https://api.spotify.com/v1/me", config);

      window.localStorage.setItem("user", res.data);
      setUser(res.data);
    };

    authorization && refreshToken && getUser();
  }, [refreshToken]);

  const value = {
    authorization,
    refreshToken,
    user,
    setAuthorization,
    setRefreshToken,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
