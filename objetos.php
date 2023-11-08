<?php
include 'clases/Categoria.php';
$Ocategorias = Categoria::objetos();
?>


<table border="5">
    <?php foreach($Ocategorias as $oCat ){ ?>
        <tr>
            <td>
                <?php echo $oCat->nombre; ?>
            </td>
        </tr>
    <?php } ?>
</table>