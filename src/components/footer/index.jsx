import React from 'react'
import '../../assets/css/footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <span>
        <a href="https://github.com/cmcmone">Developed by Roy Chen</a>
      </span>
      <span className="github-repo">
        <a
          href="https://github.com/cmcmone/reactjs-movies-app"
          title="View Github Repo"
        >
          View Code
        </a>
      </span>
    </div>
  );
}