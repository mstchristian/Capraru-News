import "./new-content.css";

function NewContent({ image_src }: { image_src: string }) {
  return (
    <div className="new-content">
      <img className="new-image" src={image_src} />
      <p className="new-summary">
        Un menor roba joyas en una tienda del TresAguas y las oculta en los
        probadores ante la mirada de un testigo.
      </p>
      <p>
        Un joven de aproximadamente 16 años protagonizó un robo en la tarde del
        viernes 18 de abril en una tienda de ropa del centro comercial
        TresAguas, en Alcorcón. Según el testimonio de un testigo presencial,
        los hechos ocurrieron entre las 18:00 y las 19:00 horas en el
        establecimiento “New Yorker”. El individuo, que vestía vaqueros, una
        camiseta con el logo de Boxeur y varias cadenas de plata y oro, accedió
        a la zona de accesorios del local. El joven sustrajo una cadena de plata
        y un anillo del expositor de colgantes. Posteriormente, se dirigió a los
        probadores con los objetos, donde presuntamente retiró el embalaje para
        ocultarlos entre su ropa y evitar ser detectado. Un testigo que se
        encontraba en un probador contiguo relató que pudo observar cómo el
        sospechoso manipulaba las cajas a través del hueco entre las paredes de
        los vestuarios, llegando incluso a introducir parte del embalaje en el
        espacio del probador adyacente. Por el momento, no ha trascendido si el
        personal del establecimiento detectó el robo en el momento ni si se ha
        presentado denuncia.
      </p>
    </div>
  );
}

export default NewContent;
