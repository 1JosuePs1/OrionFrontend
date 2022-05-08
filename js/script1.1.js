$(document).ready(function () {

    $('#btnSend').click(function () {

        var errores = '';

        // Validado Nombre ==============================
        if ($('#names').val() == '') {
            errores += '<p><i class="fas fa-user-alt"></i>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado tel ==============================
        if ($('#telefono').val() == '') {
            errores += '<p><i class="fas fa-phone"></i>Escriba su telefono</p>';
            $('#telefono').css("border-bottom-color", "#F14B4B")
        } else {
            $('#telefono').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Email ==============================
        if ($('#correo').val() == '') {
            errores += '<p><i class="fas fa-at"></i>Escriba su email</p>';
            $('#correo').css("border-bottom-color", "#F14B4B")
        } else {
            $('#correo').css("border-bottom-color", "#d1d1d1")
        }

        // Validado contraseña ==============================
        if ($('#pass').val() == '') {
            errores += '<p><i class="fas fa-key"></i>Escriba su contraseña</p>';
            $('#pass').css("border-bottom-color", "#F14B4B")
        } else {
            $('#pass').css("border-bottom-color", "#d1d1d1")
        }

        // Validado confirmar contraseña ==============================

        if ($('#pass-confi').val() == '') {
            errores += '<p><i class="fas fa-key"></i>Escriba la confirmacion de su contraseña correcta</p>';
            $('#pass-confi').css("border-bottom-color", "#F14B4B")
            valid1 = true
        } else {
            $('#pass-confi').css("border-bottom-color", "#d1d1d1")
            valid1 = true
        }

        
        // ENVIANDO MENSAJE ============================
        if (errores == '' == false) {
            let mensajeModal = 
                '<div class="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);
        }

        // Confirmacion de contraseña
        const d = document 
        const btnRegistro = d.getElementById("btnSend")

        let psw = d.getElementById("pass")
        let pswConfirm = d.getElementById("pass-confi")

        if(psw.value !== pswConfirm.value)
            alert(
                `Confirma que ambas contraseñas sean correctas`
                )
        
            





    /*------------------------------------------
    DELEGACION DE EVENTOS FIN
    --------------------------------------------*/

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function () {
            $('.modal_wrap').remove();
        });
    });

});