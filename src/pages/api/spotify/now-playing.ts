export const GET = async () => {
  const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;

  // Get access token
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  });

  const { access_token } = await tokenResponse.json();

  // Get now playing
  const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });

  if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const song = await nowPlayingResponse.json();

  return new Response(JSON.stringify({
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: song.item.artists.map((artist: { name: any; }) => artist.name).join(', '),
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};