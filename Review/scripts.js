const reviews = [
    {
      id: 1,
      name: "Rishab Kumar",
      job: "web developer",
      img:
        "./PP.JPG",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages\
        , and more recently with desktop publishing software like\
         Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');

  var prevBtn = document.querySelector('.prev-btn');
  var nextBtn = document.querySelector('.next-btn');
  var randomBtn = document.querySelector('.random-btn');

  let currentItem = 0;

  window.addEventListener('DOMContentLoaded', function() {
    loadReviews();
  });
  function loadReviews() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name; 
    job.textContent = item.job;
    info.textContent = item.text;
  }

  prevBtn.addEventListener('click', function() {
      if(currentItem !== 0) currentItem--;
      else currentItem = reviews.length;
      loadReviews();
  });
  nextBtn.addEventListener('click', function() {
    if(currentItem !== reviews.length) currentItem++;
    else currentItem = 0;
    loadReviews();
  });
  randomBtn.addEventListener('click', function() {});