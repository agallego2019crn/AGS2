<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
      <html>

          <head>
              <meta charset="UTF-8"/>
              <title></title>
              <link href="estils.css" rel="stylesheet" type="text/css"/>
            </head>

            <body>
              <xsl:for-each select="s21920/alumnat">

              <div id="alu">
                <img src="{image}"/>
              <div id="txt">
                <h2><xsl:value-of select="nom"/></h2>
                <h3><xsl:value-of select="cognom1"/>&#160;
                <xsl:value-of select="cognom2"/></h3>
                <h4><xsl:value-of select="mail"/></h4>
              </div> </div>

              </xsl:for-each>
            </body>

        </html>
      </xsl:template>
    </xsl:stylesheet>
