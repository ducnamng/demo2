import React, { useState } from "react";
import Blogitem from "./Blogitem";
import Pagination from "./Pagination";

const BlogPage = () => {
  const news = {
    data: [
      {
        id: 1,
        topic: "beauty",
        title: "Watch out! don't choose the wrong beauty product",
        para: "22A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the… A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
      },
      {
        id: 2,
        topic: "cute",
        title: "About skin care you need to know",
        para: "11A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the… A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
      },
      {
        id: 3,
        topic: "skin",
        title: "Watch out! don't choose the wrong beauty product",
        para: "1A wonderful serenity has taken possession of my entire soul, like these ty has taken possession of my entire soul, ty has taken possession of my entire soul, ty has taken possession of my entire soul, sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the… A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
      },
      // {
      //   id: 4,
      //   topic: "glow",
      //   title: "Watch out! don't choose the wrong beauty product",
      //   para: "2A wonderful serenity hA wonderfulA wonderfulA wonderfuls taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the… A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
      // },
      // {
      //   id: 5,
      //   topic: "clinic",
      //   title: "Watch out! don't choose the wrong beauty product",
      //   para: "3A wonderful serenity has taken possession of my entiith my wholith my wholvre soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the… A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
      // },
      // {
      //   id: 6,
      //   topic: "great",
      //   title: "Watch out! don't choose the wrong beauty product",
      //   para: "4A wonderful serenity has taken possession of my entire soul,of my entire soof my entire soof my entire soof my entire soof my entire so like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the… A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
      // },
    ],
    pagination: {
      page: 1,
      limit: 3,
      totalRows: 50,
    },
  };

  const recentPosts = [
    {
      img: "",
      time: "01 jan 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      img: "",
      time: "01 jan 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      img: "",
      time: "01 jan 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
  ];

  const categories = [
    {
      title: "Consultation",
    },
    {
      title: "Beauty",
    },
    {
      title: "Treatments",
    },
    {
      title: "News",
    },
  ];

  const cloudTags = [
    {
      title: "beauty",
    },
    {
      title: "cute",
    },
    {
      title: "skin",
    },
    {
      title: "glow",
    },
    {
      title: "style",
    },
    {
      title: "great",
    },
  ];

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 3,
    totalRows: 5,
  });

  const [filters, setFilters] = useState({
    limit: 3,
    page: 1,
  });

  const hanldePageChange = (newPage) => {
    console.log("New page:", newPage);
  };
  return (
    <div>
      <div className="pt-36">
        <div className="bg-[url('https://www.smileon.com.au/wp-content/uploads/2018/06/shutterstock_4580382311-e1526351860727.jpg')] bg-no-repeat bg-center ">
          <div className="max-w-screen-xl mx-auto h-60 flex  justify-between items-center text-white px-10 sm-max:flex-col sm-max:justify-center ">
            <h1 className="text-4xl font-semibold">Blog</h1>
            <p className="text-base font-medium">Home • Blog</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pt-28 flex gap-11 px-2 md-max:flex-col-reverse sm-max:pt-4 sm-max:px-4">
        <div className="w-[68%] md-max:w-full ">
          {news.data.map((newfit) => (
            <Blogitem newfit={newfit} key={newfit.id} />
          ))}
        </div>

        <div className="w-[32%] md-max:flex md-max:w-full md-max:gap-5 sm-max:flex-col">
          <div className="md-max:w-1/2 sm-max:!w-full">
            {/* Search */}
            <div className="flex">
              <input
                className="w-4/5 rounded-[50px] border shadow-2xl shadow-sky-300 py-2 px-2 text-base text-index-3"
                placeholder="Search here ..."
              />
              <button
                className="w-1/5 rounded-[50px] border shadow-2xl shadow-sky-300 py-3 px-3 "
                placeholder="Three"
              >
                <ion-icon name="search"></ion-icon>
              </button>
            </div>

            {/* Recent Posts */}
            <div className="rounded-[50px] border shadow-2xl shadow-sky-300 py-14 px-8 mt-16 sm-max:mt-4 sm-max:pl-8">
              <h1 className="text-index-2 text-base font-semibold">
                Recent Posts
              </h1>
              {recentPosts.map((post) => (
                <>
                  <div className="flex justify-center items-center gap-4 mt-6">
                    <img
                      alt=""
                      src="https://dictionary.cambridge.org/vi/images/thumb/flower_noun_002_14403.jpg?version=5.0.275"
                      className="w-20 h-20 rounded-3xl object-cover"
                    ></img>
                    <div className="flex flex-col gap-3">
                      <h1 className="text-index-1 text-sm font-semibold">
                        {post.time}
                      </h1>
                      <p className="text-index-3 text-xs font-normal">
                        {post.content}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="md-max:w-1/2 mt-[88px] sm-max:!w-full sm-max:mt-0">
            <div className="rounded-[50px] border shadow-2xl shadow-sky-300 py-14 pl-8 mt-16 md-max:mt-5 sm-max:pl-8">
              <h1 className="text-index-2 text-base font-semibold">
                Categories
              </h1>
              {categories.map((categorie) => (
                <div>
                  <p className="text-index-3 text-xs font-normal pt-2">
                    {categorie.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Cloud Tags */}
            <div className="rounded-[50px] border shadow-2xl shadow-sky-300 py-14 px-8 mt-16 md-max:mt-5 sm-max:pl-8">
              <h1 className="text-index-2 text-base font-semibold">
                Cloud Tags
              </h1>
              <span className="flex flex-col gap-4 mt-6">
                <div className="flex gap-5">
                  <p className="text-index-3 text-xs font-normal  py-1 px-2 rounded-3xl shadow-xl">
                    beauty
                  </p>
                  <p className="text-index-3 text-xs font-normal  py-1 px-2 rounded-3xl shadow-xl">
                    beauty
                  </p>
                  <p className="text-index-3 text-xs font-normal  py-1 px-2 rounded-3xl shadow-xl">
                    beauty
                  </p>
                  <p className="text-index-3 text-xs font-normal  py-1 px-2 rounded-3xl shadow-xl">
                    beauty
                  </p>
                </div>
                <div className="flex gap-5">
                  <p className="text-index-3 text-xs font-normal  py-1 px-2 rounded-3xl shadow-xl">
                    beauty
                  </p>
                  <p className="text-index-3 text-xs font-normal  py-1 px-2 rounded-3xl shadow-xl">
                    beauty
                  </p>
                  <p className="text-index-3 text-xs font-normal  py-1 px-2 rounded-3xl shadow-xl">
                    beauty
                  </p>
                </div>
              </span>
            </div>

            {/* Social Connect */}
            <div className="rounded-[50px] border shadow-2xl shadow-sky-300 py-14 px-8 mt-16 md-max:mt-5 sm-max:pl-8">
              <h1 className="text-index-2 text-base font-semibold">
                Social Connect
              </h1>
              <div className="pt-7 flex  text-index-2 justify-between">
                <div className="w-8 h-8 rounded-full shadow-2xl shadow-sky-300">
                  <ion-icon name="logo-facebook" size="large"></ion-icon>
                </div>
                <div>
                  <ion-icon name="logo-twitter" size="large"></ion-icon>
                </div>
                <div>
                  <ion-icon name="logo-instagram" size="large"></ion-icon>
                </div>
                <div>
                  <ion-icon name="logo-linkedin" size="large"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-28 pb-5 md-max:pt-4">
        <Pagination />
      </div>
    </div>
  );
};

export default BlogPage;
