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
				<xsl:for-each select="Root/Row">
					<div id="peli">
						<img src="{image}"/>
						<h2><xsl:value-of select="Titol"/></h2>
						<h3><xsl:value-of select="Director"/></h3>
						<h4><xsl:value-of select="Data_estrena"/></h4>
						<p><xsl:value-of select="Sinopsi"/></p>
					</div>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
