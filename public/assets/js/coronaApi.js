$.ajax({
    url: 'https://thevirustracker.com/free-api?global=stats',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });