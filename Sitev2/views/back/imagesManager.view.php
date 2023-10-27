<?= styleTitreNiveau3("Gestion des images :", COLOR_ASSO)?>
<div id="imagesOfAnimal">
    <?php foreach($data['animal']['images'] as $image) :?>
        <img src="public/sources/images/sites/<?= $image['url_image']?>" alt="<?= $image['libelle_image']?>" style='max-width :100px;' id='<?= $image['id_image']?>'>

    <?php endforeach?>
    <input type="hidden" name="imageToDelete" id="imageToDelete">
</div>
<hr>
<div class="form-group">
    <label for="nbImage">Nombre d'Image a rajouter</label>
    <input type="number" name="nbImage" id="nbImage">
    <div id="imageToAdd">

    </div>
</div>
<script src="public/js/imageManager.js"></script>