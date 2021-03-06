import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

export default ({projects}) => projects.map(({node: project}) =>
  <article className="project" id={project.frontmatter.title} key={project.id}>
    <div className="project__thumbnail">
        <Img loading="lazy" fluid={project.frontmatter.thumbnail.childImageSharp.fluid}/>
    </div>

    <div className="project__details">
      <div className="project__header">
        <h3 className="project__header__title">{project.frontmatter.title}</h3>
        {/* <Link className="project__header__title" to={project.frontmatter.path}>{project.frontmatter.title}</Link> */}
        <p className="project__header__date">{project.frontmatter.date}</p>
      </div>
      <p className="project__about">{project.excerpt}</p>
      <ul className="project__stack">
        {
          project.frontmatter.stack.map(tech => <li key={tech}>{tech}</li>)
        }
      </ul>

      <ul className="project__links">
        {(function generateLinks() {
          const rawLinks = project.frontmatter.links 
          const links = JSON.parse(rawLinks.replace(/'/g, `"`))
          return links.map((link, id)=>(<li key={id}><a target="_blank" rel="noopener noreferrer" href={link[1]}>{link[0]}</a></li>))
        })()}
      </ul>
    </div>
  </article>
) 

export const query = graphql`
  fragment ProjectInfo on MarkdownRemarkEdge {
    node {
      id
      excerpt(pruneLength: 180)
      frontmatter {
        title
        date(formatString: "MMMM YYYY", locale: "de")
        path
        stack
        links
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 530, , quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
