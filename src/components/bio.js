/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <div className="bio-content">
          <p>
            폴리매스가 되고 싶어요
            {/* Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `} */}
            {/* <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a> */}
          </p>
          <ul className="link-items">
            <li>
              <a
                href="https://github.com/dinomoon"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dinomoon"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Bio
