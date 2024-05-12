import java.awt.*;
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AnimationExample extends JPanel {
  private int x = 0;
  private int y = 0;
  private int diameter = 50;

  public AnimationExample() {
    setPreferredSize(new Dimension(600, 400));
    setBackground(Color.WHITE);

    Timer timer = new Timer(10, new ActionListener() {
      public void actionPerformed(ActionEvent e) {
        x++;
        y++;
        if (x > getWidth() - diameter) {
          x = 0;
          y = 0;
        }
        repaint();
      }
    });
    timer.start();
  }

  public void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.setColor(Color.RED);
    g.fillOval(x, y, diameter, diameter);
  }

  public static void main(String[] args) {
    SwingUtilities.invokeLater(new Runnable() {
      public void run() {
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setTitle("Animation Example");
        frame.setResizable(false);
        frame.add(new AnimationExample(), BorderLayout.CENTER);
        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
      }
    });
  }
}
