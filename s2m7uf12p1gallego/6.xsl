<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>

			<head>
				<meta charset="UTF-8"/>
				<title></title>
				<link href="estils.css" rel="stylesheet" type="text/css"/>
				<meta author="Aaron Gallego"/>
			</head>

    <body>

		<div id="cap">
			<h1>CCCB</h1>
      <h4>Centre de Cultura Contemporània de Barcelona</h4>
		</div>

		<div id="expo">
			<h1>Exposicions</h1>
		</div>

		<div id="menus">

			<h3>Per tema</h3>

			<ul id="menu">
				<li><a href="art.xml">Art</a></li>
				<li><a href="ciencia.xml">Ciencia</a></li>
				<li><a href="cinema.xml">Cinema i audiovisuals</a></li>
				<li><a href="ciutat.xml">Ciutat i espai públic</a></li>
				<li><a href="cultura.xml">Cultura</a></li>
				<li><a href="disseny.xml">Disseny</a></li>
				<li><a href="ecologia.xml">Ecologia</a></li>
				<li><a href="filosofia.xml">Filosofia</a></li>
				<li><a href="fotografia.xml">Fotografia</a></li>
				<li><a href="historia.xml">Història</a></li>
				<li><a href="innovacio.xml">Innovació</a></li>
				<li><a href="literatura.xml">Literatura</a></li>
				<li><a href="periodisme.xml">Periodisme</a></li>
				<li><a href="politica.xml">Política</a></li>
				<li><a href="sociologia.xml">Sociología</a></li>
				<li><a href="tecnologia.xml">Tecnologia</a></li>

			<br></br>

			<h3>Per any</h3>

				<li><a href="2018.xml">2018</a></li>
				<li><a href="2017.xml">2017</a></li>
				<li><a href="2016.xml">2016</a></li>
			</ul>

		</div>

		<div id="fotos">

					<xsl:for-each select="cccb/grup[6]">

						<a href="{id}.xml">
						<div id="cartell">
							<img src="{image}"/>
							<p><xsl:value-of select="inaguracio"/></p>
							<p><xsl:value-of select="tancament"/></p>
							<p><xsl:value-of select="any"/></p>
							<p><xsl:value-of select="categoria"/></p>
							<p><xsl:value-of select="titol"/></p>
						</div>
					</a>
					</xsl:for-each>

			</div>



    </body>
    </html>
</xsl:template>
</xsl:stylesheet>
