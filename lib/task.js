
/**
 * Run a task in Droidscript environment 
 * (This use window.prompt to communicate with android sdk)
 * 
 * @param {string} task - Droidscript method name
 * @param {Array<string>} params - all options array
 */
export const runTask = (task, ...params) => {
  let request = "App." + task.replace("$", "") + "(";

  // si el primer parámetro no require \f
  let i = 0;
  if (task.indexOf("$") != -1) request += params[i++];

  // insertar parámetros en solicitud
  for (i; i < params.length; i++)
    request += "\f" + params[i];

  // solicitar tarea
  return window.prompt("#", request);
}