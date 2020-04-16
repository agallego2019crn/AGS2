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

				<ul id="lateral">
					<xsl:for-each select="primavera/grup">
						<a href="#{id}"><li><xsl:value-of select="Artista"/></li></a>
					</xsl:for-each>
				</ul>



				<xsl:for-each select="primavera/grup">
					<a href="{id}.xml">

					<xsl:choose>
						<xsl:when test="Dia='miércoles 27 de mayo'">
							<div id="grup" style="background-image:url({image}); background-size: cover; background-repeat: no-repeat;">
            		<div id="text" style="background-color:rgba(255,0,0,0.5)">
              		<h2 id="{id}"><xsl:value-of select="Artista"/></h2>
						  		<h3><xsl:value-of select="Dia"/></h3>
						  		<h3><xsl:value-of select="Lloc"/></h3>
						  		<p><xsl:value-of select="Titol"/></p>
            		</div>
          		</div>
						</xsl:when>

						<xsl:when test="Dia='jueves 28 de mayo'">
							<div id="grup" style="background-image:url({image}); background-size: cover; background-repeat: no-repeat;">
								<div id="text" style="background-color:rgba(0,255,0,0.5)">
									<h2 id="{id}"><xsl:value-of select="Artista"/></h2>
									<h3><xsl:value-of select="Dia"/></h3>
									<h3><xsl:value-of select="Lloc"/></h3>
									<p><xsl:value-of select="Titol"/></p>
								</div>
							</div>
						</xsl:when>

						<xsl:when test="Dia='viernes 29 de mayo'">
							<div id="grup" style="background-image:url({image}); background-size: cover; background-repeat: no-repeat;">
								<div id="text" style="background-color:rgba(0,50,230,0.5)">
									<h2 id="{id}"><xsl:value-of select="Artista"/></h2>
									<h3><xsl:value-of select="Dia"/></h3>
									<h3><xsl:value-of select="Lloc"/></h3>
									<p><xsl:value-of select="Titol"/></p>
								</div>
							</div>
						</xsl:when>

						<xsl:when test="Dia='sábado 30 de mayo'">
							<div id="grup" style="background-image:url({image}); background-size: cover; background-repeat: no-repeat;">
								<div id="text" style="background-color:rgba(0,130,100,0.5)">
									<h2 id="{id}"><xsl:value-of select="Artista"/></h2>
									<h3><xsl:value-of select="Dia"/></h3>
									<h3><xsl:value-of select="Lloc"/></h3>
									<p><xsl:value-of select="Titol"/></p>
								</div>
							</div>
						</xsl:when>

						<xsl:otherwise test="">
							<div id="grup" style="background-image:url({image}); background-size: cover; background-repeat: no-repeat;">
            		<div id="text">
              		<h2 id="{id}"><xsl:value-of select="Artista"/></h2>
						  		<h3><xsl:value-of select="Dia"/></h3>
						  		<h3><xsl:value-of select="Lloc"/></h3>
						  		<p><xsl:value-of select="Titol"/></p>

								</div>
          		</div>
						</xsl:otherwise>
					</xsl:choose>
					</a>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
