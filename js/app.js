

$(document).ready(function() {
  $(document).delegate('.open', 'click', function(event){
    $(this).addClass('oppenned');
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function(event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function(event){
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});

// gsap
gsap.registerPlugin(ScrollTrigger);

gsap.to(".sq1", {
  // x: 250, 
  y: -400,
  rotation: 180, 
  duration: 5, 
  scrollTrigger:{
    trigger: ".profile",
    start: "top bottom",
    // end: 'top center',
    scrub: true, 
    // markers: true,
  }
})

gsap.to(".sq2", {
  // x: 250, 
  y: -400,
  rotation: 90, 
  duration: 20, 
  scrollTrigger:{
    trigger: ".profile",
    start: "bottom bottom",
    // end: 'top center',
    scrub: true, 
    // markers: true,
  }
})

// aos
function aos() {
  AOS.init();
}


// loading

setTimeout(function() {
  const loading = document.getElementById("loading");
  loading.classList.add("loaded");
}, 5000);

// getWorks();
// api work
async function getWorks() {
  const res = await axios.get(
    'https://portfolio-db-miyu.herokuapp.com/works/'
    )
    responseData = res.data
    showWorks(responseData)
    aos()
  }
  
const sliders = document.querySelector(".sliders");

function showWorks(works) {
  sliders.innerHTML = ''
  console.log(works);
  
  works.forEach((work) => {
    const {title, image, url, date, partner, content} = work;
    const div = document.createElement('div');


    div.innerHTML = `
    <div class="slide_left" data-aos="fade-left" data-aos-duration="3000">
      <div>
        <div>
          <a href="${url}"><img src="https://portfolio-db-miyu.herokuapp.com/works${image}" alt="${title}"></a>
        </div>
        <div>
          <h2 class="work_title">${title}</h2>
          <h5 class="work_date">${date}</h5>
        </div>
      </div>
      <div class="text_container">
        <h5 class="langs">${content}</h5>
        <h6 class="partner">${partner}</h6>
      </div>
    </div>
    `
    sliders.appendChild(div);
  })
}

getBlogs();
// api blogs
async function getBlogs() {
  const res = await axios.get(
    'https://portfolio-db-miyu.herokuapp.com/blogs/'
  )
  responseData = res.data
  showBlogs(responseData)
  aos()
}

const blogs_container = document.querySelector(".blogs");

function showBlogs(blogs) {
  blogs_container.innerHTML = ''
  console.log(blogs);
  
  blogs.forEach((blog) => {
    const {title, url, date, category} = blog;
    const div = document.createElement('div');

   console.log(title);
    div.innerHTML = `
    <div class="blog" data-aos="fade-up" data-aos-duration="3000">
      <div>
        <h3 class="blog_date">${date}</h3>
        <h5 class="blog_cat">${category}</h5>
      </div>
      <a href="${url}">
        <h4 class="blog_title">
          ${title}
        </h4>
      </a>
      <hr />
    </div>
    `
    blogs_container.appendChild(div);
  })
}