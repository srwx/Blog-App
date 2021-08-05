import "./post.css"

export default function Post() {
  return (
    <div className="post-container">
      <img
        src="https://i.pinimg.com/originals/7d/e4/28/7de428e023d0885d569085e4038366a4.jpg"
        alt="post"
        className="post-img"
      />
      <div className="category-time">
        <div className="post-category">
          <span className="post-category-list">Music</span>
          <span className="post-category-list">Tech</span>
        </div>
        <span className="post-time">1 hour ago</span>
      </div>
      <p className="post-title">Lorem ipsum dolor sit amet consectetur</p>
      <p className="post-content">
        Possimus debitis recusandae numquam nemo quia sit laudantium aut libero
        adipisci iure! Fugit mollitia labore non aperiam quia, voluptatum dolore
        blanditiis sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}
