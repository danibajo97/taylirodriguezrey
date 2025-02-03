(function ($) {
    "use strict";

    $(document).ready(function () {
        if ($('#contactForm').length > 0) {
            $("#contactForm").validate({
                rules: {
                    name: "required",
                    subject: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {
                    name: "Por favor, introduce tu nombre",
                    subject: "Por favor, introduce tu asunto",
                    email: "Por favor, introduce una dirección de correo válida",
                    message: "Por favor, introduce un mensaje de al menos 5 caracteres"
                },
                submitHandler: function (form, event) {
                    event.preventDefault(); // Evita el envío normal del formulario

                    var name = $("#name").val().trim();
                    var email = $("#email").val().trim();
                    var subject = $("#subject").val().trim();
                    var message = $("#message").val().trim();

                    var phoneNumber = "34697353553"; // Número de WhatsApp
                    var whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}. Asunto: ${subject}. Mensaje: ${message}`;
                    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                    // Mostrar mensaje de confirmación
                    $("#form-message-success").fadeIn();

                    // Limpiar los campos después de 3 segundos
                    setTimeout(() => {
                        $("#contactForm")[0].reset();
                        $("#form-message-success").fadeOut();
                    }, 3000);

                    // Abrir WhatsApp en una nueva pestaña
                    window.open(whatsappUrl, "_blank");
                }
            });
        }
    });

})(jQuery);
