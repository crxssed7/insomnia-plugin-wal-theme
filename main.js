// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/173-plugins
var fs = require("fs")
var os = require("os")

// Wal colors file
var filenm = os.homedir() + "/.cache/wal/colors"
var raw = fs.readFileSync(filenm, 'utf8')
console.log(raw)
colors = raw.split(/\n/)
background_default = colors[0]
foreground_default = colors[7]
highlight_default = colors[6]
accent_default = colors[2]

module.exports.themes = [{
    name: 'wal', // theme name in kebab-case
    displayName: 'Wal', // formatted theme name
    theme: {
        // Background, foreground, and highlight values nested directly in the theme 
        // object will serve as the default overwrites for all properties you add.
        background: {
            default: background_default,  // primary background color
            success: colors[1],  // POST request, 200 OK, parameter names
            notice: colors[3],  // PATCH request
            warning: colors[4],  // PUT request
            danger: colors[5],  // DELETE request
            surprise: colors[10],  // accent (Dashboard link, GET request, 
            // SEND button, branch button, add plugin button)
            info: colors[9]   // OPTIONS AND HEAD request
        },
        foreground: {
            default: foreground_default,    // primary font color
            success: '#fff',    // secondary font color for success background
            notice: '#000',    // secondary font color for notice background
            warning: '#fff',    // secondary font color for warning background
            danger: '#fff',    // secondary font color for danger background
            surprise: '#000',    // secondary font color for surprise background
            info: '#000'     // secondary font color for info background
        },
        highlight: {
            default: highlight_default      // sidebar highlight color
        },
        // The styles object targets sub-components of the Insomnia application.
        styles: {
            appHeader: {
                foreground: {
                    surprise: '#000'  // header branch button font color
                }
            },
            paneHeader: {
                foreground: {
                    surprise: '#000', // pane accent font color
                    info: '#000'  // pane response font color
                }
            },
            editor: {
                foreground: {
                    default: foreground_default, // primary editor font color
                    surprise: accent_default, // editor accent font color
                    info: foreground_default  // editor response font color
                }
            },
            dialog: {
                background: {
                    default: background_default // modal primary background color
                },
                foreground: {
                    default: foreground_default   // modal primary font color
                }
            }
        }
    }
}]