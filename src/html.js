import React from "react"

let styles

if (process.env.NODE_ENV === `production`) {
    try {
        styles = require(`!raw-loader!../public/styles.css`)
    } catch (e) {
        console.log(e)
    }
}

export default class HTML extends React.Component {
    render() {
        let css

        if (process.env.NODE_ENV === `production`) {
            css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />
        }

        return (
            <html {...this.props.htmlAttributes}>
                <head>

                    <meta charset="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

                    {css}

                    {this.props.headComponents}

                </head>
                <body {...this.props.bodyAttributes}>
                    <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }}>

                    </div>
                    {this.props.postBodyComponents}
                </body>
            </html>
        )
    }
}
