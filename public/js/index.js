$.when($.ready).then(() => {
  // const filmId = parseInt('16792940');
  // $.post('/ajax/player', {
  //     episode: 0,
  //     filmId,
  //   },
  //   (response) => {
  //     const item = JSON.parse(response);
  //     $('#player').html(item.player);
  //   }
  // );
  $.ajax({
    url: 'https://ver03.sptvp.com/watch?videoID=668b87084454f&userID=100471',
    type: 'GET',
    success(data) {
      console.log(data);
    },
    error(e) {
      console.log('Error:', e);
    },
  });
});
