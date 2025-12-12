"use strict";

/**
 * 🔧 Utilitaires de validation pour formulaires
 * Module contenant les fonctions de validation réutilisables
 * Approche simple, sécurisée et modulaire
 */

/**
 * Nettoie le texte pour éviter les injections XSS
 * @param {string} text - Texte à nettoyer
 * @returns {string} - Texte sécurisé
 */
export function cleanText(text) {
  if (!(typeof text === "string")) {
    console.log("Ceci n'est pas un text")
  } else {
    const dangereux = [`<`, `>`, `"`, `'`]
let result = text
dangereux.forEach((element) => { 
  const regex = new RegExp(element, "g")
  result = result.replace(regex, "");
return result
  });
result = result.trim()
  }
  // TODO:
  // 1. Vérifier que le paramètre est bien une string
  // 2. Créer un tableau des caractères dangereux à remplacer
  // 3. Utiliser une boucle forEach pour appliquer tous les remplacements
  // 4. Retourner le texte nettoyé et sans espaces superflus
  //
  // Hint: Les caractères à échapper sont < > " '
  // Hint: Utilisez replace() avec RegExp et le flag "g" pour remplacer toutes les occurrences
  // Hint: trim() enlève les espaces en début/fin
}
cleanText(`   coc"cinel><<<<<'le`)

/**
 * Vérifie si un champ est vide ou contient seulement des espaces
 * @param {string} value - Valeur à vérifier
 * @returns {boolean} - true si vide
 */
export function isEmpty(value) {
  if (!value) {
    console.log("Erreur sur la saisie")
    return true
  } else if (value.trim().length === 0) {
    console.log("Rien n'a été écrit")
    return true
  } else {
    console.log("Le champs n'est pas vide")
    return false
  }
  // TODO:
  // 1. Vérifier si value existe (pas null, undefined, etc.)
  // 2. Vérifier si après suppression des espaces, il reste quelque chose
  //
  // Hint: Utilisez l'opérateur ! et trim()
  // Hint: length === 0 peut être utilisé pour vérifier si vide
}
isEmpty("er")





/**
 * Valide une adresse email avec regex simple mais efficace
 * @param {string} email - Email à valider
 * @returns {boolean} - true si valide
 */
export function isValidEmail(email) {
  
  if (isEmpty(email)===false) {
const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
if (regex.test(email)) {
  console.log("email valide")
  return true
} else {
  console.log("email invalide")
  return false
} 
  } else {
    console.log("champ vide")
    return false
  }
  // TODO:
  // 1. D'abord vérifier que l'email n'est pas vide
  // 2. Créer une regex pour valider le format email
  // 3. Tester l'email contre cette regex
  //
  // Hint: Une regex simple : /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // Hint: Utilisez test() sur votre regex
}
isValidEmail("pomme@gmail.com")
/**
 * Vérifie la longueur minimale d'un texte
 * @param {string} text - Texte à vérifier
 * @param {number} minLength - Longueur minimale requise
 * @returns {boolean} - true si assez long
 */
export function hasMinLength(text, minLength) {
  if (isEmpty(text) === true) {
console.log("C'est vide")
  } else  {
    cleanText(text)
    if (text.length >= minLength) {
      return true
    } else {
      console.log("text trop court")
    }
  }
  // TODO:
  // 1. Vérifier que le texte n'est pas vide
  // 2. Nettoyer le texte des espaces superflus
  // 3. Comparer la longueur avec la longueur minimale requise
  //
  // Hint: Réutilisez la fonction isEmpty()
  // Hint: trim().length >= minLength
}
hasMinLength(`   coc"cinel><<<<<'le`, 5)
/**
 * 🎨 Affiche un message d'erreur pour un champ spécifique
 * @param {string} fieldId - ID du champ en erreur
 * @param {string} message - Message d'erreur à afficher
 */
export function showError(fieldId, message) {
  const field = document.getElementById(fieldId)
  
    field.classList.remove("border-gray-300")
    field.classList.add("border-red-500")
    
    const errorId = fieldId + "-error"
    const errorField = document.getElementById(errorId)
    errorField.classList.remove("hidden")
    errorField.textContent = message

  // TODO:
  // 1. Trouver l'élément d'erreur (ID: fieldId + "-error")
  // 2. Trouver l'élément input correspondant
  // 3. Afficher le message dans l'élément d'erreur
  // 4. Modifier les classes CSS pour montrer l'état d'erreur
  //
  // Hint: getElementById() pour trouver les éléments
  // Hint: textContent pour définir le texte
  // Hint: classList.add/remove pour gérer les classes CSS
  // Hint: Classes à manipuler : "hidden", "border-red-500", "border-gray-300"
}
showError("password", "erreur de saisie")
/**
 * ✅ Cache le message d'erreur pour un champ
 * @param {string} fieldId - ID du champ
 */
export function hideError(fieldId) {
  const errorField = document.getElementById(fieldId + "-error")
  const field = document.getElementById(fieldId)
  errorField.classList.add("hidden")
  field.classList.remove("border-red-500")
  field.classList.add("border-gray-300")
  // TODO:
  // 1. Trouver l'élément d'erreur et l'élément input
  // 2. Cacher l'élément d'erreur (ajouter classe "hidden")
  // 3. Remettre le style normal de l'input
  //
  // Hint: Inverse de showError()
  // Hint: Enlever "border-red-500" et remettre "border-gray-300"
}
hideError("password")
/**
 * 🎉 Affiche le message de succès global
 */
export function showSuccess() {
  // TODO:
  // 1. Trouver l'élément de succès (ID: "success")
  // 2. Le rendre visible en enlevant la classe "hidden"
  // 3. Faire défiler la page vers cet élément pour une meilleure UX
  //
  // Hint: scrollIntoView() avec { behavior: "smooth" }
}

/**
 * 📚 CONCEPTS À RETENIR :
 *
 * 1. **Sécurité** : Toujours nettoyer les données utilisateur (XSS)
 * 2. **Modularité** : Une fonction = une responsabilité
 * 3. **Validation progressive** : Vérifications par étapes
 * 4. **UX** : Feedback visuel immédiat et clair
 * 5. **Réutilisabilité** : Ces fonctions serviront pour tous les formulaires
 */
