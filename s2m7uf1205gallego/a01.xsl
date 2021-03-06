<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<meta charset="UTF-8"/>
				<title></title>
				<link href="primavera.css" rel="stylesheet" type="text/css"/>
			</head>
			<body>
				<h1>Primavera Sound</h1>
        <ul id="menu">
						<li><a href="index.xml">Home</a></li>
            <li><a href="miercoles.xml">Miércoles</a></li>
            <li><a href="jueves.xml">Jueves</a></li>
            <li><a href="viernes.xml">Viernes</a></li>
            <li><a href="sabado.xml">Sábado</a></li>
        </ul>

	<xsl:for-each select="primavera/grup[1]">
            		<div id="info">
									<img src="{image}"/>
								<div id="informacio">
									<h2 id="{id}"><xsl:value-of select="Artista"/></h2>
						  		<h3><xsl:value-of select="Dia"/></h3>
						  		<h3><xsl:value-of select="Lloc"/></h3>
						  		<p><xsl:value-of select="Titol"/></p>
									<p><a href="{Web}" target="_blank"><xsl:value-of select="Web"/></a></p>
									<p><xsl:value-of select="Descripcio"/></p>
								</div>
								</div>
				</xsl:for-each>

			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
