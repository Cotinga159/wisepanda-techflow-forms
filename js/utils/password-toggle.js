"use strict";

/**
 * 👁️ Utilitaire pour basculer l'affichage des mots de passe
 * Permet de révéler/masquer le contenu des champs password
 * Améliore l'UX en évitant les erreurs de saisie
 */

/**
 * Initialise le toggle pour un champ de mot de passe
 * @param {string} fieldId - ID du champ de mot de passe
 * @param {string} toggleId - ID du bouton toggle
 * @param {string} iconId - ID de l'icône
 */
function initPasswordToggle(fieldId, toggleId, iconId) {
  // TODO:
  // 1. Récupérer les 3 éléments DOM par leur ID
  // 2. Vérifier que tous les éléments existent
  // 3. Si un élément manque, afficher un warning et arrêter
  // 4. Ajouter un écouteur d'événement "click" sur le bouton
  // 5. Dans l'écouteur : basculer le type password/text
  // 6. Changer l'icône (🙈 quand visible, 👁️ quand masqué)
  // 7. Mettre à jour l'aria-label pour l'accessibilité
  //
  // Hint: getElementById() pour récupérer les éléments
  // Hint: console.warn() pour les erreurs
  // Hint: passwordField.type pour basculer entre "password" et "text"
  // Hint: setAttribute("aria-label", message) pour l'accessibilité
}

/**
 * Initialise tous les toggles de mot de passe
 */
function initAllPasswordToggles() {
  // TODO:
  // 1. Appeler initPasswordToggle pour le champ password principal
  // 2. Appeler initPasswordToggle pour le champ repeatPassword
  //
  // Hint: Les IDs sont cohérents : "password", "toggle-password", "eye-icon"
  // Hint: Pour repeat : "repeatPassword", "toggle-repeat-password", "eye-icon-repeat"
}

export { initAllPasswordToggles };

/**
 * 📚 CONCEPTS À RETENIR :
 *
 * 1. **Accessibilité** : aria-label pour les utilisateurs de lecteurs d'écran
 * 2. **Robustesse** : Vérification d'existence des éléments DOM
 * 3. **Modularité** : Une fonction par toggle, une fonction d'initialisation globale
 * 4. **UX** : Feedback visuel immédiat avec changement d'icône
 * 5. **Sécurité** : Possibilité de masquer rapidement le mot de passe
 */
