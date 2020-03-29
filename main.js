fetch ("./blog.json").then((response) => {return response.json();}).then((blog) => initBlog(blog));


function initBlog(){
    var title = blog[0].title;
    var unpack = blog[0].map((x) => {return `<p>` +x.entry + `</p>`});
    document.getElementById("blog").innerText= unpack;
    document.getElementsByClassName("lead").innerText = title;
}

function blogClick(e,blog){
    var page = e.target.id;
    var title = blog[page].title;
    var unpack = blog[page].map((x) => {return `<p>` +x.entry + `</p>`});
    document.getElementById("blog").innerText= unpack;
    document.getElementsByClassName("lead").innerText = title;
}
