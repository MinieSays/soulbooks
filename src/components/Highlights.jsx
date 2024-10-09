import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Highlight from './ui/Highlight'

const Highlights = () => {
  return (
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why Choose <span className="purple">
                        Soul Books?
                    </span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight icon={"bolt"} title="Easy and Quick" para="Instant access to your favorite books via PDF." />
                    <Highlight icon={"book-open"} title="10,000+ Books" para="Soul Book has thousands of spiritual books." />
                    <Highlight icon={"tags"} title="Affordable" para="Affordably priced, starting as low as $5.99" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights