/* ===== Firma bilgileri: tüm sayfalar buradan okur =====
   "DOLDUR" yazan alanları gerçek bilgilerle değiştirin. */
window.FIRMA = {
  ad: "Şefim İnşaat",
  slogan: "Ölçünüze özel mobilya, mutfak ve tadilat",
  telefon: "0 5XX XXX XX XX",          // DOLDUR: ekranda görünen biçim
  telefonLink: "+905XXXXXXXXX",        // DOLDUR: tel: bağlantısı için, boşluksuz
  whatsapp: "905XXXXXXXXX",            // DOLDUR: başında + olmadan, ülke koduyla
  eposta: "teklif@ornek.com",          // DOLDUR: teklif e-postalarının gideceği adres
  web3formsKey: "",                    // İSTEĞE BAĞLI: web3forms.com'dan alınan anahtar; yazılırsa teklif müşterinin e-posta uygulaması açılmadan doğrudan gelir
  instagram: "sefiminsaat",
  bolge: "Samsun",
  adres: "",                           // DOLDUR (isteğe bağlı): atölye adresi
  il: "Samsun",
  ilceler: ["Alaçam","Asarcık","Atakum","Ayvacık","Bafra","Canik","Çarşamba","Havza","İlkadım","Kavak","Ladik",
            "Ondokuzmayıs","Salıpazarı","Tekkeköy","Terme","Vezirköprü","Yakakent"]
};
window.FIRMA.waLink = (metin) => `https://wa.me/${window.FIRMA.whatsapp}${metin ? "?text=" + encodeURIComponent(metin) : ""}`;
