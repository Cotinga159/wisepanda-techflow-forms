"use strict";

import {
  cleanText,
  isEmpty,
  isValidEmail,
  hasMinLength,
  showError,
  hideError,
  showSuccess,
} from "../utils/validator.js";

import { validationRules } from "../utils/constants.js";

/**
 * 📝 Gestionnaire de validation pour le formulaire de contact
 * Module spécialisé dans la validation côté client avec feedback immédiat
 * Architecture modulaire pour faciliter la maintenance
 */

/**
 * Variables du module pour le formulaire
 */
let contactForm = null;

/**
 * Initialise la validation du formulaire de contact
 */
function initContactValidation() {
  // TODO:
  // 1. Récupérer le formulaire par son ID "contact-form"
  // 2. Vérifier qu'il existe, sinon afficher une erreur console
  // 3. Ajouter un écouteur pour l'événement "submit"
  // 4. Appeler setupFieldValidation() pour configurer la validation temps réel
  //
  // Hint: getElementById(), console.error(), addEventListener()
}

/**
 * Configure la validation en temps réel pour chaque champ
 */
function setupFieldValidation() {
  // TODO:
  // 1. Créer un tableau avec les IDs des 4 champs : name, email, subject, message
  // 2. Pour chaque champ, ajouter deux écouteurs :
  //    - "blur" qui déclenche validateField()
  //    - "input" qui cache l'erreur via hideError()
  //
  // Hint: forEach(), getElementById(), addEventListener()
  // Hint: Vérifier que field existe avant d'ajouter les écouteurs
}

/**
 * Gère la soumission du formulaire
 * @param {Event} event - Événement de soumission
 */
function handleFormSubmit(event) {
  // TODO:
  // 1. Empêcher la soumission par défaut du formulaire
  // 2. Valider tous les champs avec validateAllFields()
  // 3. Si valide : appeler submitForm()
  // 4. Sinon : faire le focus sur le premier champ en erreur
  //
  // Hint: preventDefault(), querySelector(".border-red-500"), focus()
}

/**
 * Valide tous les champs du formulaire
 * @returns {boolean} - true si tous les champs sont valides
 */
function validateAllFields() {
  // TODO:
  // 1. Initialiser une variable isValid à true
  // 2. Appeler validateField() pour chaque champ (name, email, subject, message)
  // 3. Si un champ est invalide, mettre isValid à false
  // 4. Retourner le résultat final
  //
  // Hint: Utiliser && pour maintenir false si un champ échoue
  // Hint: N'utilisez pas de return early pour valider TOUS les champs
}

/**
 * Valide le champ nom
 * @param {string} value - Valeur à valider
 * @returns {object} - {isValid: boolean, errorMessage: string}
 */
function validateNameField(value) {
  // TODO:
  // 1. Vérifier si vide avec isEmpty()
  // 2. Vérifier la longueur minimale avec hasMinLength() et validationRules
  // 3. Retourner un objet avec isValid et errorMessage
  //
  // Hint: validationRules.name.minLength pour la règle
  // Hint: Messages en dur pour ce TP, seront centralisés plus tard
}

/**
 * Valide le champ email
 * @param {string} value - Valeur à valider
 * @returns {object} - {isValid: boolean, errorMessage: string}
 */
function validateEmailField(value) {
  // TODO:
  // 1. Vérifier si vide
  // 2. Vérifier le format avec isValidEmail()
  // 3. Retourner l'objet de résultat approprié
}

/**
 * Valide le champ sujet
 * @param {string} value - Valeur à valider
 * @returns {object} - {isValid: boolean, errorMessage: string}
 */
function validateSubjectField(value) {
  // TODO:
  // 1. Même logique que validateNameField
  // 2. Utiliser validationRules.subject.minLength
}

/**
 * Valide le champ message
 * @param {string} value - Valeur à valider
 * @returns {object} - {isValid: boolean, errorMessage: string}
 */
function validateMessageField(value) {
  // TODO:
  // 1. Même logique que les autres champs
  // 2. Utiliser validationRules.message.minLength
}

/**
 * Table de correspondance pour les fonctions de validation
 */
const fieldValidators = {
  // TODO: Associer chaque fieldId à sa fonction de validation
  // name: validateNameField,
  // email: validateEmailField,
  // etc...
};

/**
 * Valide un champ spécifique (complexité cognitive réduite)
 * @param {string} fieldId - ID du champ à valider
 * @returns {boolean} - true si le champ est valide
 */
function validateField(fieldId) {
  // TODO:
  // 1. Récupérer l'élément DOM du champ
  // 2. Récupérer la fonction de validation depuis fieldValidators
  // 3. Appeler la fonction avec field.value
  // 4. Si invalide : showError(), sinon hideError()
  // 5. Retourner result.isValid
  //
  // Hint: Vérifications de sécurité si field ou validator n'existent pas
}

/**
 * Traite l'envoi du formulaire (simulation pour le TP)
 */
function submitForm() {
  // TODO:
  // 1. Créer un objet formData avec les valeurs nettoyées (cleanText)
  // 2. Logger les données pour debug
  // 3. Reset le formulaire
  // 4. Afficher le message de succès
  // 5. Programmer la disparition du message après 5 secondes
  //
  // Hint: cleanText() pour sécuriser, reset() pour vider, setTimeout()
  // Hint: getElementById("success") et classList.add("hidden")
}

// Export des fonctions publiques
export { initContactValidation, validateField };

// Auto-initialisation
document.addEventListener("DOMContentLoaded", initContactValidation);

/**
 * 📚 CONCEPTS À RETENIR :
 *
 * 1. **Séparation des responsabilités** : Une fonction par type de validation
 * 2. **Table de correspondance** : fieldValidators évite les if/switch
 * 3. **Validation progressive** : Temps réel + validation globale à la soumission
 * 4. **Sécurité** : Nettoyage des données avant traitement
 * 5. **UX** : Focus sur erreur + feedback immédiat + auto-hide du succès
 */
