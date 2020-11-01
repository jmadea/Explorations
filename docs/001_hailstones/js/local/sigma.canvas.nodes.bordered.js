;(function(){
    sigma.utils.pkg('sigma.canvas.nodes');
    sigma.canvas.nodes.bordered = (function() {
      var renderer = function(node, context, settings) {
        var args = arguments,
            prefix = settings('prefix') || '',
            size = node[prefix + 'size'],
            color = node.color || settings('defaultNodeColor'),
            border_color = node.bcolor || settings('defaultNodeBorderColor') || '#F00', 
            border_width = node.bwidth || settings('defaultNodeBorderWidth') || size/5
        context.fillStyle = color
        context.lineWidth = border_width
        context.strokeStyle = border_color
        context.beginPath();
        context.arc(
          node[prefix + 'x'],
          node[prefix + 'y'],
          node[prefix + 'size'],
          0,
          Math.PI * 2,
          true
        );
        context.closePath();
        context.fill();
        context.stroke();
      };
      return renderer;
    })();
})();


