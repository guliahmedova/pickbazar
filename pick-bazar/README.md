Golden Scatter Inc.
FrontEnd Task

Növbəti mərhələdə sizin bacarıqlarınızı ölçməyimiz üçün sizə kiçik bir tapşırıq vermək istəyirik. Sizdən
aşağıdakı səhifələri pixel perfect, API ilə inteqrasiya edilmiş şəkildə funksional və responsive şəkildə
hazırlamağınız tələb olunur.
Main Page 🍎 🍌 🥝
User Page 🧔 👩
Documentation API
Proyekt yazılarkən aşağıdakı texnologiyalar istifadə edilməlidir.
● Next.JS
● React/Redux Toolkit
● SCSS
Bu taskı həll etməyiniz üçün sizə 3 gün vaxt verilmişdir. 3 gün ərzində taskı tam olaraq
yekunlaşdırmağınız tələb olunmur. Bacardığınız qədər hissəsini səliqəli şəkildə hazırlayıb, bizimlə
paylaşa bilərsiniz. Ancaq daha çox funsionallığı həll edə bilən namizədlərə daha çox üstünlük
veriləcəkdir.
Taskı bitirdikdən sonra source kodu public şəkildə github-a yerləşdirib, linkini bizimlə paylaşmağınız
xahiş edirik.
Proyektin səhifələrinin nümunələri faylın sonuna əlavə edilmişdir.
Main Page 🍎 🍌 🥝 :
● Project'de Categories section olmalıdır.
● Category-ə click etdikdə, həmin category-ə aid olan Products'lar görsənməlidir.
● Product'in şəkili, çəkisi, adı, qiyməti ve add to cart button'ı olmalıdı. Hər bir product'ın üzərinə
click etdikdə, həmin product'ın ətraflı məlumat üçün bir modal window açılmalıdır.
● İstifadəçi add to cart button'a click etdikdə, həmin product basket'ə əlavə olunmalıdır.
● Basket'ə əlavə etdiyiniz productların: sayi ve qiyməti görsənməlidi. Əlavə olaraq total amount
qiymətidə görsənməlidi. Hər bir əlavə etdiyimiz product'ın sayını həm artıra, həm də azalda
bilmək imkanımız olmalıdır.
● Bir input olmalidi, və həmin inputa product'in adi daxil edib, onu istifadəçiyə göstərmək imkani
olmalidi.
User Page 🧔 👩 :
● Register və Login funksionallığı.
● İstifadəçii Login olan halda, öz user səhifəsinə keçid edə bilməlidir.
● Kechid etdiyi page'de, user istədiyi product'ı create, update ve delete edə bilər. Məsələn əgər
istifadəçi bir product'i User page'de yaradıbsa, o zaman həmin product Main page'de
görsənməlidir, və her istifadəçi onu səbətə əlavə edə bilər.
❗Note: Create, update və delete ancaq login olub və User Page'e keçiddən mümkün olmalıdır.
Hər user ancaq öz yaratdığı product'larnan bu əməliyyatları görə bilər. Authorization üçün header'də, Token yazıb, daha sonra login olan zaman Back-Enddən qayıdan token'i elave eliyib
göndərməlisiniz.
Example:

Qeydlər:
1. Nümunələrdə əlavə funksionallıqlar ola bilər. Lakin, sizdən yalnız qeyd etdiyimiz
funksionallıqları kodlaşdırmağınız tələb olunur. Qalan funsionallıqların visual olaraq hazırlanması
kifayət edir.
2. Mövcud olmayan məhsullar POST - /api/products/ API vasitəsi ilə yaradıla bilər.
3. Əgər taskla bağlı xüsusi suallarınız olarsa, sualınızı bizə ünvanlaya bilərsiniz.

Additionals😁
- browser icon 
- home pagede 
- navbar need help hover 
- navbar scroll sticky

- home page slider 

- favicon erroru
- Loading, Error, Not Found Pages - if needed 
- if images will be problem then check nextConfig for external pictures