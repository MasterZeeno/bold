import $, { when, ready, post } from 'jquery';

when(ready).then(() => {
  const filmId = '16792940';
  post(
    '/ajax/player',
    {
      episode: 0,
      filmId, 
    },
    (response) => {
      const item = JSON.parse(response);
      $('#player').html(item.player);
    }
  );
  console.log(filmId);
});
