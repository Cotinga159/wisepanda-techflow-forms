"use strict";

import { validationMessages } from "../utils/constants.js";
import {
  cleanText,
  isValidEmail,
  isEmpty,
  hasMinLength,
  showError,
  hideError,
  showSuccess,
} from "../utils/validator.js";
import { initAllPasswordToggles } from "../utils/password-toggle.js";

/**
 * 🔐 Gestionnaire de validation pour le formulaire de connexion
 * Validation simplifiée : email OU username + mot de passe
 * Gestion de l'option "Se souvenir de moi"
 */

/**
 * Variables du module pour le formulaire
 */
let loginForm = null;

/**
 * Initialise la validation du formulaire de connexion
 */
function initLoginValidation() {
  // TODO:
  // 1. Récupérer le formulaire "login-form"
  // 2. Vérifier son existence
  // 3. Ajouter l'écouteur de soumission
  // 4. Configurer la validation temps réel
  //
  // Hint: Même pattern que register et contact
}

/**
 * Configure la validation en temps réel pour chaque champ
 */
function setupFieldValidation() {
  // TODO:
  // 1. Définir le tableau des 2 champs : identifier, password
  // 2. Ajouter les écouteurs "blur" et "input" pour chaque champ
  //
  // Hint: Plus simple que register car seulement 2 champs
}

/**
 * Gère la soumission du formulaire
 */
function handleFormSubmit(event) {
  // TODO:
  // 1. Empêcher la soumission par défaut
  // 2. Valider tous les champs
  // 3. Si valide : soumettre, sinon focus sur première erreur
  //
  // Hint: preventDefault(), validateAllFields(), focus()
}

/**
 * Valide tous les champs du formulaire
 */
function validateAllFields() {
  // TODO:
  // 1. Valider identifier et password
  // 2. Retourner true seulement si les deux sont valides
  //
  // Hint: Seulement 2 validateField() à appeler
}

/**
 * Valide l'identifiant (email OU username)
 * @param {string} value - Valeur à valider
 * @returns {object} - {isValid: boolean, errorMessage: string}
 */
function validateIdentifierField(value) {
  // TODO:
  // 1. Vérifier si vide
  // 2. Vérifier longueur minimale (3 caractères)
  // 3. Ne PAS vérifier si c'est un email valide (flexibilité)
  // 4. Utiliser validationMessages.identifier
  //
  // Hint: isEmpty(), hasMinLength(value, 3)
  // Hint: Validation volontairement permissive pour login
}

/**
 * Valide le mot de passe (validation simplifiée pour login)
 * @param {string} value - Valeur à valider
 * @returns {object} - {isValid: boolean, errorMessage: string}
 */
function validatePasswordField(value) {
  // TODO:
  // 1. Vérifier seulement si le champ n'est pas vide
  // 2. Pas de vérification de complexité (déjà fait à l'inscription)
  // 3. Utiliser validationMessages.password.required
  //
  // Hint: isEmpty() seulement, pas de hasMinLength ni regex
  // Hint: Login = validation minimale, Register = validation stricte
}

/**
 * Table de correspondance des validateurs
 */
const fieldValidators = {
  // TODO: Associer identifier et password à leurs fonctions
  // identifier: validateIdentifierField,
  // password: validatePasswordField,
};

/**
 * Valide un champ spécifique
 * @param {string} fieldId - ID du champ à valider
 * @returns {boolean} - true si le champ est valide
 */
function validateField(fieldId) {
  // TODO:
  // 1. Récupérer l'élément DOM
  // 2. Récupérer la fonction de validation
  // 3. Appeler la fonction avec field.value
  // 4. Afficher/masquer l'erreur selon le résultat
  //
  // Hint: Même logique que register, mais plus simple (pas de cas spéciaux)
}

/**
 * Traite l'envoi du formulaire
 */
function submitForm() {
  // TODO:
  // 1. Récupérer identifier (nettoyé), password (non nettoyé), rememberMe
  // 2. Déterminer si identifier est un email avec isValidEmail()
  // 3. Créer formData avec la clé appropriée (email ou username)
  // 4. Logger les données pour debug
  // 5. Appeler simulateLoginSuccess()
  //
  // Hint: const isEmail = isValidEmail(identifier)
  // Hint: [isEmail ? "email" : "username"]: identifier
  // Hint: document.getElementById("remember").checked pour la checkbox
}

/**
 * Simule une connexion réussie (temporaire pour dev)
 */
function simulateLoginSuccess() {
  // TODO:
  // 1. Logger un message de succès
  // 2. Reset le formulaire
  // 3. Afficher le message de succès
  // 4. Programmer une redirection après 2 secondes
  //
  // Hint: console.log(), reset(), showSuccess(), setTimeout()
  // Hint: En production : window.location.href = "/dashboard"
}

// Auto-initialisation
document.addEventListener("DOMContentLoaded", () => {
  // TODO:
  // 1. Initialiser les toggles de mot de passe
  // 2. Initialiser la validation du formulaire
  //
  // Hint: initAllPasswordToggles() puis initLoginValidation()
});

/**
 * 📚 CONCEPTS À RETENIR :
 *
 * 1. **Validation adaptative** : Login moins strict que Register
 * 2. **Flexibilité identifiant** : Accepte email OU username
 * 3. **Détection automatique** : isValidEmail() pour choisir la clé
 * 4. **Remember Me** : Gestion de la checkbox optionnelle
 * 5. **Simulation dev** : Code temporaire en attendant l'API réelle
 */
